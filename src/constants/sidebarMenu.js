import {
  Dashboard,
  Inventory,
  Mail,
  Money,
  Note,
  Store,
  AccountBox,
  Chat,
  GolfCourse,
  Sports,
} from "@mui/icons-material";

export const sidebarMenu = [
  {
    title: "Dashboard",
    icon: Dashboard,
    path: "/",
  },
  {
    title: "Pesanan",
    icon: Mail,
    path: "/orders",
  },
  {
    title: "Produk",
    icon: Inventory,
    child: [
      {
        title: "Tambah Produk",
        path: "/add-product",
      },
      {
        title: "Daftar Produk",
        path: "/products",
      },
      {
        title: "Kategori Produk",
        path: "/products-category",
      },
      {
        title: "Jenis Produk",
        path: "/products-type",
      },
      {
        title: "Brand Produk",
        path: "/products-brand",
      },
    ],
  },
  {
    title: "Promosi Toko",
    icon: Store,
    child: [
      {
        title: "Flashsale",
        path: "/flashsale",
      },
      {
        title: "Voucher Promo",
        path: "/voucher",
      },
      {
        title: "Diskon Produk",
        path: "/discount",
      },
    ],
  },
  {
    title: "Transaksi",
    icon: Money,
    child: [
      {
        title: "Transaksi Penjualan",
        path: "/sales-transaction",
      },
      {
        title: "Transaksi Pengguna",
        path: "/user-transaction",
      },
    ],
  },
  {
    title: "Laporan Statistik",
    icon: Note,
    child: [
      {
        title: "Statistik Produk",
        path: "/invoices",
      },
      {
        title: "Statistik Pembeli",
        path: "/contacts",
      },
      {
        title: "Statistik Toko",
        path: "/store-statistic",
      },
      {
        title: "Statistik Operational",
        path: "/operational-statistic",
      },
    ],
  },
];

export const sidebarRolemenu = [
  {
    title: "Profiling",
    icon: AccountBox,
    child: [
      {
        title: "Daftar Profiling",
        path: "/profiling-list",
      },
      {
        title: "Hasil Profiling",
        path: "/profiling-results",
      },
    ],
  },
  {
    title: "Konsultasi",
    icon: Chat,
    child: [
      {
        title: "Chat Konsultasi",
        path: "/consultation-chat",
      },
      {
        title: "Ruang Chat",
        path: "/chat-room",
      },
    ],
  },
  {
    title: "Clubbing",
    icon: GolfCourse,
    child: [
      {
        title: "Daftar Club",
        path: "/club-list",
      },
      {
        title: "Bonus/Promo",
        path: "/club-promo",
      },
    ],
  },
  {
    title: "Pelatih",
    icon: Sports,
    child: [
      {
        title: "Afiliate Pelatih",
        path: "/afiliate-coach",
      },
      {
        title: "Komisi",
        path: "/commission",
      },
      {
        title: "Withdraw",
        path: "/withdraw",
      },
    ],
  },
];
