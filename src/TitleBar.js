import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

export function TitleBar({ productCount }) {
  return (
    <>
      <div className="title-bar">
        <div className="title">
          <h1>Shop in style</h1>
          <h4>Shop what you wanted.</h4>
        </div>
        <div className="Cart-btn">

          <Badge badgeContent={productCount} color="primary">
            
            <Button
              variant="outlined"
              startIcon={<AddShoppingCartIcon />}
            >Cart</Button>
          </Badge>
        </div>
      </div>
    </>
  );
}
