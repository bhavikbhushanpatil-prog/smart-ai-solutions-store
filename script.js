// Replace the example Payhip URLs below with your actual product checkout URLs.
// The templates themselves should be uploaded to Payhip, not stored in this public website repository.
const checkoutLinks = {
  budget: "https://payhip.com/",
  pnl: "https://payhip.com/",
  invoice: "https://payhip.com/",
  investment: "https://payhip.com/",
  bundle: "https://payhip.com/"
};
document.querySelectorAll("[data-product]").forEach((link) => {
  const key = link.dataset.product;
  if (checkoutLinks[key]) link.href = checkoutLinks[key];
});
document.getElementById("year").textContent = new Date().getFullYear();
