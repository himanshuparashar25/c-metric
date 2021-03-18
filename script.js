
// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive");
    sidebarOpen = false;
  }
}

// Table Hero

jQuery(document).ready(function($){
  $('#example').DataTable({
    language: {
      lengthMenu: "Show _MENU_ Entries",
      info: "Showing _PAGE_ of _PAGES_ pages",
      search: "Search",
      paginate: {
        first:      "First",
        last:       "Last",
        next:       "Next",
        previous:   "Previous"
      }
    },
    "ordering": false
  });
});

