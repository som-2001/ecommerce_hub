import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#E5E7EB", padding: "40px 0" }} className="mt-5">
      <Grid container justifyContent="space-between" textAlign="center">
        <Grid item xs={12} md={4} lg={4} sm={12}>
          <Typography variant="h6" gutterBottom>
            ABOUT
          </Typography>
          <ul className="p-0">
            <li>
              <Link href="#" color="inherit" underline="hover">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Careers
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={4} lg={4} sm={12}>
          <Typography variant="h6" gutterBottom>
            GROUP COMPANIES
          </Typography>
          <ul className="p-0">
            <li>
              <Link href="#" color="inherit" underline="hover">
                abc Company
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                cdf Company
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                efg Company
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={4} lg={4} sm={12}>
          <div>
            <Typography variant="subtitle1" gutterBottom>
              Mail Us:
            </Typography>
            <address style={{ color: "#374151" }}>
              Someswar Private Limited,
              <br />
              Buildings Kolkata, near State Bank of India,Katjuridanga,
              <br />
              Near GT Road, Bankura,saratpalli
              <br />
              Bankura, 722102, Kolkata, India
            </address>
          </div>
          <div>
            <Typography variant="subtitle1" gutterBottom>
              Registered Office Address:
            </Typography>
            <address style={{ color: "#374151" }}>
              Someswar Private Limited,
              <br />
              Buildings Kolkata, near State Bank of India,Katjuridanga,
              <br />
              Near GT Road, Bankura,saratpalli
              <br />
              Bankura, 722102, Kolkata, India
            </address>
            <Typography variant="body2" gutterBottom>
              Telephone: 91-7718456257 / 91-352564574
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" style={{ marginTop: "24px", color: "#374151" }}>
        &copy; 2023-2024 Company.com
      </Typography>
    </footer>
  );
};
