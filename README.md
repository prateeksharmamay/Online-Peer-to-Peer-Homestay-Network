# Online-Peer-to-Peer-Homestay-Network

Reference has been taken from AirBnB website.

The project includes modules with the following functionalities:
<h3>User Module/Service:</h3>
· Create a new User (Reference AirBnb websites for fields informaton)<br />]
· Delete an existing User<br />
· User can place the bid<br />
· Change a user’s information (name, address,profile image etc) – This function must support the ability to change ALL attributes<br />
· Search for a property based on attributes. You do not have to consider attributes that are not listed above in properties table (Use category table if needed).<br />
· Display information about a User.<br />
· Reviews and rating. Must be able to upload photos for properties while reviewing.<br />
<h3> Host Module/Service:</h3>
· Create a new Host.<br />
· Delete an existing Host<br />
. Dashboard : Able to see analytics activities.<br />
· Generate Bill for a User (Every Trip).<br />
· Upload introductory video.
· Upload images about events during his ride.<br />
. Approval of requested property by user. (Accept/Denied)<br />
<h3> Billing Module/Service:</h3>
· Create a new Bill for each trip.<br />
· Delete an existing Bill.<br />
· Search an existing Bill.<br />
<h3> Admin Module/Service:</h3>
· Add host to the system.<br />
. Search for enrolled host area wise. On clicking host, Host profile should get open<br />
· Review host/customer account<br />
· Search for a Bill based on attributes (fetch all bills By date, By months)<br />
· Display information about a Bill.<br />
<h3> Trips Module/Service:</h3>
· Create a new trip.<br />
· Edit an existing trip.<br />
· Delete an existing trip.<br />
· History of trips (Display in user’s account)<br />
· History of trips (Display in host’s account)<br />

<h3> Bidding</h3> 
· User should be able to place bid<br />
· Bid timings will be 4 days<br />
· After completing the bid user should be able to see pending trip bid in his trip history (No need to implement detailed functionality just Accept/Don’t)<br />

<h3>Admin Dashboard :</h3>
· Retrieve data from database and show first 10 properties with its revenue/year (Bar, Pie or any kind of graph)<br />
· City wise revenue/year (Bar, Pie or any kind of graph)<br />
· 10 hosts who sold maximum number of properties last month with its revenue<br />

<h3>Host Dashboard :</h3>
· Graph for clicks per page(Bar, Pie or any kind of graph)<br />
· Graph for Property click (Bar, Pie or any kind of graph)<br />
· Capture the area which is less seen.<br />
· Graph for reviews on properties (Data from database)<br />
· Trace diagram for tracking one user or a group of users (ex. Users from San Jose, CA)<br />
6) Trace diagram for tracking bidding for an item

#Pre-Requisites to run the project:
1) Install NodeJS, RabbitMQ, MySQL, MongoDB, Redis. Run these as services.
2) Run npm install for all package.json files.
3) Run node servers for both rabbitMQ service and express client and access through http://localhost:3000
