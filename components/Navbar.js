import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import axios from "axios";
import { Divider } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { productDetail } from "@/api/functions/Product.api";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Navbar = () => {
  const textRef = React.useRef();
  const [products, setProducts] = React.useState([]);
  const [hide, setHide] = React.useState(false);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [badge, setBadge] = React.useState("");
  const router = useRouter();
  const { id } = useSelector((state) => state.ecom);

  React.useEffect(() => {
    setBadge(id.length);
  }, []);

  useQuery(["products"], productDetail, {
    onSuccess: (data) => {
      setFilteredProducts(data);
      setProducts(data);

    },
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleSearch = (query) => {
    if (query !== "") setHide(true);
    else setHide(false);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
   
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ marginTop: "42px" }}
    >
      <MenuItem onClick={(e) => router.push("/cart")}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={badge} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>

      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge color="error">
            <AccountCircleIcon />
          </Badge>
        </IconButton>
        <Link href="/loginUser">Sign In</Link>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: "0%", zIndex: "1000000" }}>
      <AppBar position="static" style={{ backgroundColor: "#9b35c0" }}>
        <Toolbar>
         
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            EHUB
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleSearch(e.target.value)}
              inputRef={textRef}
            />
            <ul
              style={{
                position: "fixed",
                top: "8%",
                backgroundColor: "#e1e1e3",
                textDecoration: "none",
              }}
              className="lg:w-96 sm:w-96 md:w-96 w-64 text-black rounded-md z-50"
            >
              {hide &&
                filteredProducts?.slice(0, 8)?.map((product) => (
                  <>
                    <li
                      className="searchbutton cursor-pointer"
                      
                      key={product.id}
                      style={{ padding: "8px" }}
                      onClick={(e) => {
                        router.push(`/detailPage/${product.id}`);
                        localStorage.setItem("id", product.id);
                        setHide(false);
                        textRef.current.value = "";
                      }}
                    >
                      {product.title}
                    </li>
                    <Divider />
                  </>
                ))}
            </ul>
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={(e) => router.push("/cart")}
            >
              <Badge badgeContent={badge} color="error">
                <ShoppingCartIcon />
              </Badge>
              <p className="text-lg">Cart</p>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge color="error">
                <Link href="/loginUser">
                  {" "}
                  <AccountCircleIcon style={{ marginRight: "5px" }} />
                </Link>
              </Badge>
              <Link className="text-lg" href="/loginUser">
                Sign In
              </Link>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
