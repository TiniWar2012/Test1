import React, { Component, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import {
  FontAwesome,
  Feather,
  SimpleLineIcons,
  AntDesign,
  Ionicons,
  MaterialIcons,
  EvilIcons,
  Entypo,
  Fontisto,
} from "@expo/vector-icons";
import "react-native-gesture-handler";

function DM_Catalog() {
  const [catalog, setCatalog] = useState("");
  const [detailList, setDetailList] = useState(detailCatalog);
  const setCatalogFilter = (catalog) => {
    if (catalog !== "") {
      setDetailList([
        ...detailCatalog.filter((item) => item.catalog === catalog),
      ]);
    } else {
      setDetailList(detailCatalog);
    }
    setCatalog(catalog);
  };

  const renderCataloglList = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} style={styles.DetailCatalogItem}>
        <Image
          style={styles.imgDetailCataloglist}
          source={{
            uri: item.image,
          }}
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hiden />
      {/* Header: Searrch, Cart */}
      <View style={styles.header}>
        <View style={styles.search}>
          <Ionicons name="md-search-outline" size={20} />
          <TextInput
            style={styles.textSearch}
            placeholder="Tìm trên Phamarcity"
          />
        </View>
        <View style={styles.cart}>
          <Ionicons name="ios-cart-outline" size={30} color={"white"} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.CatalogList}>
          <FlatList
            data={CatalogList}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.CatalogItem,
                    catalog === item.catalog && styles.btnActive,
                  ]}
                  onPress={() => setCatalogFilter(item.catalog)}
                >
                  <Image
                    style={styles.imgCataloglist}
                    source={{
                      uri: item.image,
                    }}
                  />
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.detailCatalog}>
          <FlatList
            data={detailList}
            numColumns={2}
            keyExtractor={(item, i) => i.toString()}
            renderItem={renderCataloglList}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default DM_Catalog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F62F9",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  search: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingLeft: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginRight: 10,
  },
  textSearch: {
    color: "gray",
    fontSize: 18,
    marginLeft: 5,
    color: "#AAAAAA",
  },

  body: {
    flex: 10,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
  },
  CatalogList: {},
  imgCataloglist: {
    height: 45,
    width: 45,
  },
  btnActive: { borderColor: "blue", borderRightWidth: 4 },
  CatalogItem: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    borderColor: "gray",
    borderWidth: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  detailCatalog: {
    paddingLeft: 5,
    flex: 1,
  },
  imgDetailCataloglist: {
    height: 80,
    width: 80,
  },
  DetailCatalogItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
    height: 140,
    borderRadius: 15,
    borderColor: "#AAAAAA",
    borderWidth: 1,
    margin: 5,
    padding: 10,
  },
});

// Data: Catalog list
const CatalogList = [
  {
    id: 1,
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/01_D%C6%B0%E1%BB%A3c_ph%E1%BA%A9m_01-Medicine_Duoc_Pham.png",
    name: "Dược phẩm",
    catalog: "duocpham",
  },
  {
    id: 2,
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/02_Ch%C4%83m_s%C3%B3c_s%E1%BB%A9c_kh%E1%BB%8Fe_02-Healthcare_Cham_soc_suc_khoe.png",
    name: "Chăm sóc sức khỏe",
    catalog: "chamsocsuckhoe",
  },
  {
    id: 4,
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/6.12.png",
    name: "Mẹ và bé",
    catalog: "mevabe",
  },
  {
    id: 5,
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/03_Ch%C4%83m_s%C3%B3c_c%C3%A1_nh%C3%A2n_03-Personal_Care_Cham_soc_ca_nhan.png",
    name: "Chăm sóc cá nhân",
    catalog: "chamsoccanhan",
  },
  {
    id: 6,
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/04_Ch%C4%83m_s%C3%B3c_s%E1%BA%AFc_%C4%91%E1%BA%B9p_04-Beauty_Care_Cham_soc_sac_dep.png",
    name: "Chăm sóc sắc đẹp",
    catalog: "chamsocsacdep",
  },
  {
    id: 7,
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/05_S%E1%BA%A3n_ph%E1%BA%A9m_ti%E1%BB%87n_l%E1%BB%A3i_05-CVS_San_pham_tien_loi.png",
    name: "Sản phẩm tiện lợi",
    catalog: "sanphamtienloi",
  },
  {
    id: 8,
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/2.05_Thi%E1%BA%BFt_b%E1%BB%8B_y_t%E1%BA%BF_2.05-Healthcare_Equipment_Thiet_bi_y_te.png",
    name: "Thiết bị y tế",
    catalog: "thietbiyte",
  },
];

// Data: Details DM_Catalog
const detailCatalog = [
  {
    id: 1,
    catalog: "duocpham",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/Thu%E1%BB%91c_ko_k%C3%AA_%C4%91%C6%A1n.png",
    name: "Thuốc không kê đơn",
  },
  {
    id: 2,
    catalog: "duocpham",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/P00218_Rx_Da_li%E1%BB%85u.png",
    name: "Thuốc kê đơn",
  },
  {
    id: 3,
    catalog: "chamsocsuckhoe",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/2.04Th%E1%BB%B1c_ph%E1%BA%A9m_dinh_d%C6%B0%E1%BB%A1ng_2.04-Nutrition_Food_Thuc_pham_dinh_duong.jpg",
    name: "Thực phẩm dinh dưỡng",
  },
  {
    id: 4,
    catalog: "chamsocsuckhoe",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/2.06_D%E1%BB%A5ng_c%E1%BB%A5_s%C6%A1_c%E1%BB%A9u_2.06-First_Aids_Dung_cu_so_cuu1.jpg",
    name: "Dụng cụ sơ cứu",
  },
  {
    id: 5,
    catalog: "chamsocsuckhoe",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/2.07_K%E1%BA%BF_ho%E1%BA%A1ch_gia_%C4%91%C3%ACnh_2.07-Family_Planning_Ke_hoach_gia_dinh_-_Copy.jpg",
    name: "Kế hoạch gia đình",
  },
  {
    id: 6,
    catalog: "chamsocsuckhoe",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/2.08_Ch%C4%83m_s%C3%B3c_M%E1%BA%AFtTaiM%C5%A9i_2.08-For_EyeEarNose_Cham_soc_MatTaiMui.jpg",
    name: "Chăm sóc Mắt/Tai/Mũi",
  },
  {
    id: 7,
    catalog: "chamsocsuckhoe",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/2.09_Ch%C4%83m_s%C3%B3c_ch%C3%A2n_2.09-Foot_Care_Cham_soc_chan2.jpg",
    name: "Chăm sóc chân",
  },
  {
    id: 8,
    catalog: "chamsocsuckhoe",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/2.10_Kh%E1%BA%A9u_trang_y_t%E1%BA%BF_2.10-Medical_Face_Mask_Khau_trang_y_te.jpg",
    name: "Khẩu trang y tế",
  },
  {
    id: 9,
    catalog: "chamsocsuckhoe",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/2.12.png",
    name: "Dầu tràm, Dầu xoa bóp",
  },
  {
    id: 10,
    catalog: "chamsoccanhan",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/3.02_S%E1%BA%A3n_ph%E1%BA%A9m_ph%C3%B2ng_t%E1%BA%AFm_3.02-Bath_Care_San_pham_phong_tam.png",
    name: "Sản phẩm phòng tắm",
  },
  {
    id: 11,
    catalog: "chamsoccanhan",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/3.04_S%E1%BA%A3n_ph%E1%BA%A9m_kh%E1%BB%AD_m%C3%B9i_3.04-Deodorant_San_pham_khu_mui.png",
    name: "Sản phẩm khử mùi",
  },
  {
    id: 12,
    catalog: "chamsoccanhan",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/3.05_Ch%C4%83m_s%C3%B3c_t%C3%B3c_3.05-Hair_Care_Cham_soc_toc.png",
    name: "Chăm sóc tóc",
  },
  {
    id: 13,
    catalog: "chamsoccanhan",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/3.06_V%E1%BB%87_sinh_ph%E1%BB%A5_n%E1%BB%AF_3.06-Feminine_Hygiene_Ve_sinh_phu_nu.png",
    name: "Vệ sinh phụ nữ",
  },
  {
    id: 14,
    catalog: "chamsoccanhan",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/3.07_Ch%C4%83m_s%C3%B3c_nam_gi%E1%BB%9Bi_3.07-Men_Care_Cham_soc_nam_gioi.png",
    name: "Chăm sóc nam giới",
  },
  {
    id: 15,
    catalog: "chamsoccanhan",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/3.08_Ch%C4%83m_s%C3%B3c_r%C4%83ng_mi%E1%BB%87ng_3.08-Oral_Care_Cham_soc_rang_mieng.png",
    name: "Chăm sóc răng miệng",
  },
  {
    id: 15,
    catalog: "chamsoccanhan",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/3.03_Ch%C4%83m_s%C3%B3c_c%C6%A1_th%E1%BB%83_3.03-Body_Care_Cham_soc_co_the.png",
    name: "Chăm sóc cơ thể",
  },
  {
    id: 16,
    catalog: "mevabe",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/photo_2021-08-23_21-10-35_8080.png",
    name: "Chăm sóc em bé",
  },
  {
    id: 16,
    catalog: "mevabe",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/6.12_6.12-TPCN_D%C3%A0nh_cho_tr%E1%BA%BB_em_6.12-VMS_For_Kids_TPCN_Danh_cho_tre_em.png",
    name: "TPCN dành cho trẻ em",
  },
  {
    id: 16,
    catalog: "mevabe",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/photo_2021-08-23_21-08-20.png",
    name: "Sản phẩm dành cho mẹ",
  },
  {
    id: 16,
    catalog: "mevabe",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/6.16.png",
    name: "TPCN dành cho phụ nữ mang thai",
  },
  {
    id: 17,
    catalog: "sanphamtienloi",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/5.01_H%C3%A0ng_t%E1%BB%95ng_h%E1%BB%A3p_5.01-General_Merchandise_Hang_tong_hop.png",
    name: "Hàng tổng hợp",
  },
  {
    id: 18,
    catalog: "sanphamtienloi",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/H%C3%A0ng_b%C3%A1ch_h%C3%B3a.png",
    name: "Hàng bách hóa",
  },
  {
    id: 19,
    catalog: "chamsocsacdep",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/4.01_Ch%C4%83m_s%C3%B3c_m%E1%BA%B7t_4.01-Face_Care_Cham_soc_mat.png",
    name: "Chăm sóc mặt",
  },
  {
    id: 20,
    catalog: "chamsocsacdep",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/4.02_S%E1%BA%A3n_ph%E1%BA%A9m_ch%E1%BB%91ng_n%E1%BA%AFng_4.02-Sun_Care_San_pham_chong_nang.png",
    name: "Sản phẩm chống nắng",
  },
  {
    id: 21,
    catalog: "chamsocsacdep",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/4.03_D%E1%BB%A5ng_c%E1%BB%A5_l%C3%A0m_%C4%91%E1%BA%B9p_4.03-Beauty_Accessories_Dung_cu_lam_dep.png",
    name: "Dụng cụ làm đẹp",
  },
  {
    id: 22,
    catalog: "chamsocsacdep",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/2_01_D%C6%B0%E1%BB%A3c_m%E1%BB%B9_ph%E1%BA%A9m_2_01_Dermo_Skincare_Duoc_my_pham2.png",
    name: "Dược - Mỹ phẩm",
  },
  {
    id: 23,
    catalog: "thietbiyte",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/2.05.01_Nhi%E1%BB%87t_k%E1%BA%BF_2.05.01-Thermometers_Nhiet_ke_l.png",
    name: "Nhiệt kế",
  },
  {
    id: 24,
    catalog: "thietbiyte",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/2.05.02_M%C3%A1y_%C4%91o_huy%E1%BA%BFt_%C3%A1p_2.05.02-Blood_Pressure_Monitors_May_do_huyet_ap.png",
    name: "Máy đo huyết áp",
  },
  {
    id: 25,
    catalog: "thietbiyte",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/2.05.03_M%C3%A1y_%C4%91o_%C4%91%C6%B0%E1%BB%9Dng_huy%E1%BA%BFt_2.05.03-Blood_Glucose_Monitors_May_do_duong_huyet.png",
    name: "Máy đo đường huyết",
  },
  {
    id: 26,
    catalog: "thietbiyte",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/2.05.04_M%C3%A1y_x%C3%B4ng_kh%C3%AD_dung_2.05.04-Nebulizer__Aspirators_May_xong_khi_dung.png",
    name: "Máy xông khí dung",
  },
  {
    id: 27,
    catalog: "thietbiyte",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/2.05.05_Thi%E1%BA%BFt_b%E1%BB%8B_y_t%E1%BA%BF_kh%C3%A1c_2.05.05-Other_Medical_Devices_Thiet_bi_y_te_khac.png",
    name: "Thiết bị y tế khác",
  },
  {
    id: 28,
    catalog: "thietbiyte",
    image:
      "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/cat-dung-cu-kiem-tra.png",
    name: "Dung cụ kiểm tra",
  },
];
