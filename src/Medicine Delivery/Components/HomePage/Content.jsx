import { Link } from "react-router-dom";
import {
  Input,
  InputGroup,
  Button,
  InputLeftElement,
  InputRightElement,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";
// import ICON
import { BsSearch } from "react-icons/bs";
import content from "./MiniComponents/Contentstyle.module.css";

// Import components
import Carousel from "./MiniComponents/Carousel";
import Offer from "./MiniComponents/Offer";
import Category from "./MiniComponents/Category";
import Launches from "./MiniComponents/Launches";
import SearchBar from "./MiniComponents/SearchBar";
import TabCarousal from "./MiniComponents/TabCarousel";

const PaymentOffers = [
  "https://cdn01.pharmeasy.in/dam/banner/banner/a93d45ef9eb-HSBC.jpg?dim=1440x0",
  "https://cdn01.pharmeasy.in/dam/banner/banner/f3c446e4108-AMAZON.jpg?dim=1440x0",
  "https://cdn01.pharmeasy.in/dam/banner/banner/9466405c308-au.jpg?dim=1440x0",
  "https://cdn01.pharmeasy.in/dam/banner/banner/0c5c9ec6841-mobikwik.jpg?dim=1440x0",
];

const newLaunch = [
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/O80793/pharmeasy-ironfolic-acid-with-zinc-vitamin-c-b12-maintains-overall-health-bottle-of-60-2-1668672053.jpg?dim=1440x0",
    details: "Pharmeasy Iron+folic Acid With Zinc, Vitamin",
    mrp: "599.00",
    price: "299",
    off: "50",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/E52686/liveasy-surgicals-rolled-bandage-pack-of-12-5cm-x-3mt-2-1653648071.jpg?dim=1440x0",
    details: "Liveasy Surgical's Rolled Bandage Pack",
    mrp: "390.00",
    price: "185.00",
    off: "20",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/K49952/dettol-neem-bathing-soap-bar-with-pure-neem-oil-75g-buy-3-get-1-free-combo-offer-on-bath-soap-2-1664184591.jpg?dim=1440x0",
    details: "Dettol Neem Bathing Soap Bar With Pure Neem Oil 75g (buy 3",
    mrp: "360",
    price: "250",
    off: "10",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/U55315/baidyanath-nagpur-drakshasav-450-ml-2-1656599371.jpg?dim=1440x0",
    details: "Dettol Neem Bathing Soap Bar With Pure Neem Oil 75g (buy 3",
    mrp: "360",
    price: "250",
    off: "10",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/X79195/liveasy-surgicals-rolled-bandage-pack-of-12-10cmx3mt-2-1653648101.jpg?dim=1440x0",
    details: "Liveasy Surgical's Rolled Bandage Pack",
    mrp: "390.00",
    price: "185.00",
    off: "20",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/U87029/sugar-free-natura-low-calorie-sweetner-500-pellets-2-1669362102.jpg?dim=1440x0",
    details: "Pharmeasy Iron+folic Acid With Zinc, Vitamin",
    mrp: "599.00",
    price: "299",
    off: "50",
  },
];

const Trending = [
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1669655233.jpg?dim=1440x0",
    details: "Pharmeasy Iron+folic Acid With Zinc, Vitamin",
    mrp: "599.00",
    price: "299",
    off: "50",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/D64484/everherb-by-pharmeasy-flaxseed-omega-3-essential-fatty-acids-healthy-heart-bottle-of-60-2-1670824839.jpg?dim=1440x0",
    details: "Liveasy Surgical's Rolled Bandage Pack",
    mrp: "390.00",
    price: "185.00",
    off: "20",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/021870/b-d-ultra-fine-iii-nano-pen-needles-4mm-32g-15-1-1669619409.jpg?dim=1440x0",
    details: "Dettol Neem Bathing Soap Bar With Pure Neem Oil 75g (buy 3",
    mrp: "360",
    price: "250",
    off: "10",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/K78780/pharmeasy-pill-box-organizer-2-1669349726.jpg?dim=1440x0",
    details: "Dettol Neem Bathing Soap Bar With Pure Neem Oil 75g (buy 3",
    mrp: "360",
    price: "250",
    off: "10",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/270382/scalpe-plus-anti-dandruff-shampoo-bottle-of-75-ml-2-1669616723.jpg?dim=1440x0",
    details: "Liveasy Surgical's Rolled Bandage Pack",
    mrp: "390.00",
    price: "185.00",
    off: "20",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/A65047/liveasy-essentials-bamboo-cotton-buds-80-sticks-160-swabs-1-1641792801.jpg?dim=1440x0",
    details: "Pharmeasy Iron+folic Acid With Zinc, Vitamin",
    mrp: "599.00",
    price: "299",
    off: "50",
  },
];

const ShopByCategory = [
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/a7a03f6764393c65bab22e56de576a59.png?f=pngdim=256x0",
    name: "Mega clearance sale",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png?f=png?dim=256x0",
    name: "Personal care",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/cfc8ee511609321e91eb86a34f5b2885.png?f=png?dim=256x0",
    name: "Healthcare devices",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/335dae76832d370c94f0440f5ba89e1f.png?f=png?dim=256x0",
    name: "Health food and drinks",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0",
    name: "Home care",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f692f7243b8036ed97d99a7973dd42b3.png?f=png?dim=256x0",
    name: "Mother and baby care",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/154dec0567b23244b7dcbf2158d39eee.png?f=png?dim=256x0",
    name: "Skin care",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/514d0d7d01a63502b4ebfec9ae26f4d2.png?f=png?dim=256x0",
    name: "Fitness supplements",
  },
];
const MiniPoster = [
  "https://cdn01.pharmeasy.in/dam/banner/banner/fcbf95577c3-VELCRO.jpg?dim=1440x0",
  "https://cdn01.pharmeasy.in/dam/banner/banner/a9ad640ce01-4.jpg?dim=1440x0",
  "https://cdn01.pharmeasy.in/dam/banner/banner/93ef9d6df4f-SLIPPERS.jpg?dim=1440x0",
  "https://cdn01.pharmeasy.in/dam/banner/banner/6e16a38ea89-ORTHO_PEDOC.jpg?dim=1440x0",
];

const Concern = [
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/923a665cc6f-Skin_care.png?dim=128x0",
    title: "Skin Care",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/18d2e2ee86b-Vitamins.png?dim=128x0",
    title: "Vitamins & Supplements",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/0af9ac9f350-Diabetes.webp?dim=128x0",
    title: "Diabetes Care & Sugar",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/24a0d2c733e-Heart.webp?dim=128x0",
    title: "Cardiac Care",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/68369c9df98-Pregnancy.webp?dim=128x0",
    title: "Baby & Mom Care",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/16ab65c0826-Covid.webp?dim=128x0",
    title: "Covid Care",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/26bbd7a9e98-Lifestyle.webp?dim=128x0",
    title: "Lifestyle Disorders",
  },
];
const Articles = [
  {
    img: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/06124619/10-2.jpg?dim=1440x0",
    details:
      "Benefits of Shalabhasana (Locust Pose) and How to Do it By Dr. Himani Bisht",
  },
  {
    img: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/12/12104633/1-8.jpg?dim=1440x0",
    details: "How Exercise Can Help You Deal With Breast Cancer",
  },
  {
    img: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/12/06111050/11-1.jpg?dim=1440x0",
    details:
      "Benefits of Natarajasana (Dancer Pose) and How to Do it By Dr. Ankit Sankhe",
  },
  {
    img: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/11/06122433/28.jpg?dim=1440x0",
    details: "Goji Berry: Uses, Benefits, Side Effects By Dr. Rajeev Singh",
  },
  {
    img: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/11/06122833/4-15.jpg?dim=1440x0",
    details: "Avocado Oil: Uses, Benefits, Side Effects By Dr. Rajeev Singh",
  },
];
export default function Content() {
  return (
    <div className={content.mainBox} key={Math.random()}>
      <div id="search_box">
        <div style={{ marginTop: "50px" }}>
          <h1 style={{ fontSize: "30px", marginLeft: "30%" }}>
            <b>What are you looking for?</b>
          </h1>
        </div>
        <SearchBar />
        <hr style={{ marginTop: "30px" }} />
        <TabCarousal />
      </div>

      <hr style={{ marginTop: "20px" }} />
      {/* carousel */}
      <Carousel />
      <hr style={{ marginTop: "20px" }} />

      <div id="LabTest_box">
        <h1 className={content.Heading}>Lab Tests by Health Concern</h1>
        <div className={content.LabBox}>
          <div>
            <img
              src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/10dfe8c8aa7-HealthCheckups.jpg?dim=256x0"
              alt="1"
            />
          </div>
          <div>
            <img
              src="	https://cms-contents.pharmeasy.in/homepage_top_categories_images/69588f95674-Diabetes.jpg?dim=256x0"
              alt="2"
            />
          </div>
          <div>
            <img
              src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/69588f95674-Diabetes.jpg?dim=256x0"
              alt="3"
            />
          </div>
          <div>
            <img
              src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/c507b2563fd-thyroid.png?dim=256x0"
              alt="4"
            />
          </div>
          <div>
            <img
              src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/eeb3fe3251f-WomenCare.jpg?dim=256x0"
              alt="5"
            />
          </div>
          <div>
            <img
              src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/94616a36a9a-Lifestyle.jpg?dim=256x0"
              alt="6"
            />
          </div>
          <div>
            <img
              src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/355e9b77fb5-FeverInfection.jpg?dim=256x0"
              alt="7"
            />
          </div>
        </div>
      </div>

      <hr style={{ marginTop: "20px" }} />
      {/* payment offer */}
      {/* <div id="Offer_Box">
        <h1 className={content.Heading}>Payment Offers</h1>
        <div className={content.Offers}>
          {PaymentOffers.map((e) => (
            <Offer img={e} />
          ))}
        </div>
      </div>

      <hr style={{ marginTop: "50px" }} />

      <div className={content.Order}>
        <div className={content.OrderLeft}>
          <div>
            <img
              src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0"
              alt="Prescription"
            />
          </div>
          <div>
            <h3>Order with Prescription</h3>
            <p>Upload prescription and we will deliver your medicines</p>
            <Button colorScheme="teal" size="md">
              Upload
            </Button>
          </div>
        </div>
        <div className={content.OrderRight}>
          <h4>How does this work?</h4>
          <div>
            <TableContainer>
              <Table variant="striped">
                <Tbody>
                  <Tr>
                    <Td>(1) Upload a photo of your prescription</Td>
                    <Td>(3) We will call you to confirm the medicines</Td>
                  </Tr>
                  <Tr>
                    <Td>(2) Add delivery address and place the order</Td>
                    <Td>
                      (4) Now, sit back! your medicines will get delivered at
                      your doorstep
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div> */}
      {/* shop by Category */}
      <div>
        <h1 className={content.Heading}>Shop by Categories</h1>
        <div className={content.ShopByCategory}>
          {ShopByCategory.map((e) => (
            <Category key={e.id} img={e.img} name={e.name} />
          ))}
        </div>
      </div>

      <hr style={{ marginTop: "30px" }} />

      {/* new Launch */}
      <div>
        <h1 className={content.Heading}>New Launches</h1>
        <h3 className={content.Sub_Heading}>
          New wellness range just for you!
        </h3>
        <div className={content.NewLaunch}>
          {newLaunch.map((e) => (
            <Launches
              key={e.id}
              img={e.img}
              details={e.details}
              mrp={e.mrp}
              price={e.price}
              off={e.off}
            />
          ))}
        </div>
      </div>

      <hr style={{ marginTop: "30px" }} />

      {/* Trending */}
      <div id="Trending">
        <h1 className={content.Heading}>Trending Near You</h1>
        <h3 className={content.Sub_Heading}>Popular in your city</h3>
        <div className={content.NewLaunch}>
          {Trending.map((e) => (
            <Launches
              img={e.img}
              details={e.details}
              mrp={e.mrp}
              price={e.price}
              off={e.off}
              key={e.id}
            />
          ))}
        </div>
      </div>

      <hr style={{ marginTop: "30px" }} />

      {/* purple box */}
      {/* <div className={content.PurpleBox}>
        <div className={content.SubPurpleBox}>
          <span className={content.SubPurpleBox1}>Become a </span>
          <span className={content.SubPurpleBox2}>
            <img src="/images/MediCare.png" alt="" />
          </span>
          <span className={content.SubPurpleBox3}>member</span>
        </div>

        <div className={content.SubPurpleBoxMid}>
          <p>
            Save 5% on allopathic medicines, 50% on lab tests & get FREE
            delivery with PLUS membership Know more
          </p>
          <Button colorScheme="orange">Explore Now</Button>
        </div>
        <div className={content.SubPurpleBoxRight}>
          <img
            src="https://assets.pharmeasy.in/apothecary/_next/static/media/PlusFamily.22677720.png?dim=1440x0"
            alt=""
          />
        </div>
      </div>

      <hr style={{ marginTop: "30px" }} /> */}

      {/* Shop by Concern */}
      <div>
        <h1 className={content.Heading}>Shop by Concern</h1>
        <h3 className={content.Sub_Heading}>
          Products are handpicked by experts
        </h3>
        <div className={content.ShopByConcern}>
          {Concern.map((e) => (
            <Category img={e.img} name={e.title} />
          ))}
        </div>
      </div>

      <hr style={{ marginTop: "30px" }} />

      {/* mini poster */}
      {/* <div id="Offer_Box" style={{ marginTop: "30px" }}>
        <div className={content.Offers}>
          {MiniPoster.map((e) => (
            <Offer img={e} />
          ))}
        </div>
      </div>
      <hr style={{ marginTop: "30px" }} /> */}
      {/* Articles
      <div>
        <h1 className={content.Heading}>Health Articles</h1>
        <h3 className={content.Sub_Heading}>
          Get up-to-date on our latest health updates
        </h3>
        <div className={content.Articles}>
          {Articles.map((e) => (
            <Category img={e.img} name={e.details} />
          ))}
        </div>
      </div>
      <hr style={{ marginTop: "30px" }} /> */}
      {/* Customer reviews */}
      <div style={{ marginTop: "50px" }}>{/* <CustomerReview /> */}</div>
      <div
        style={{
          textAlign: "left",
          marginTop: "30px",
          lineHeight: "30px",
          marginBottom: "30px",
        }}
      >
        {/* <div>
          <p>
            <b>Top-Selling Healthcare Products:</b> Accu-Chek Active - 100
            Strips | Supradyn Multivitamin Tablets | DR Morepen BG 03 - 50
            Strips | Dettol Antiseptic Liquid | Ensure Diabetes Care Vanilla
            Sugar Free Jar | Dettol Instant Hand Sanitizer | Everherb Shilajit |
            Softovac SF Powder | Pediasure Premium Chocolate Refill
          </p>
          <p>
            <b>Top-Selling Medicines:</b> Dolovera Gel | Neurobion Forte |
            Chymoral Forte | Crocin Advance | Soframycin | Dexorange |
            Becadexamin | Folvite | Livogen | Becosules | Fourderm | Nurokind
            Plus | Burnol | Crocin 650 | Mintop 5 | Thrombophob | Evion 600
          </p>
          <p>
            <b>COVID-19 Preventatives:</b> N95 Masks | Hand Sanitizers | Hand
            Gloves, Disinfectants, Thermometers & more!
          </p>
        </div>
        <div style={{ textAlign: "left", marginTop: "30px" }}>
          <h1>
            <b>Your One-Stop Online Pharmacy - PharmEasy</b>
          </h1>
          <div>
            <b>We've got India Covered!</b>
            <p>
              We now deliver in 1000+ cities and towns across 22000+ pin codes.
              We thereby cover every nook and corner of the country! The major
              cities in which we deliver include Mumbai, Kolkata, Delhi,
              Bengaluru, Ahmedabad, Hyderabad, Chennai, Thane, Howrah, Pune,
              Gurgaon, Navi Mumbai, Jaipur, Noida, Lucknow, Ghaziabad &
              Vadodara.
            </p>
          </div>
          <p>
            <b>
              How Are We Making Lives Simpler With Our Online Medical Store?
            </b>
            <p>
              Our doorstep delivery service is available in PAN-India across top
              cities like Bangalore, Delhi, Mumbai, Kolkata, Hyderabad, Gurgaon,
              Noida, Pune, etc. Our online medical store also allows you to
              choose from 1 lakh+ products including OTC products and medical
              equipment. PharmEasy is a one-stop online medical platform where
              you can also book diagnostic tests including blood tests,
              full-body checkups, and other preventive health check-ups at an
              affordable cost, right from the comfort of your home. We have
              partnered with trusted & certified labs that arrange for a sample
              pick-up from the convenience of your home. They also provide you
              with timely reports.
            </p>
          </p>
          <p>
            <b>We've got India Covered!</b>
            <p>
              We now deliver in 1000+ cities and towns across 22000+ pin codes.
              We thereby cover every nook and corner of the country! The major
              cities in which we deliver include Mumbai, Kolkata, Delhi,
              Bengaluru, Ahmedabad, Hyderabad, Chennai, Thane, Howrah, Pune,
              Gurgaon, Navi Mumbai, Jaipur, Noida, Lucknow, Ghaziabad &
              Vadodara.
            </p>
          </p>
          <b>We Believe in ‘Simplifying Healthcare, Impacting Lives!’</b>
        </div> */}
      </div>
    </div>
  );
}
