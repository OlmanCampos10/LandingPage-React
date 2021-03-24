import React from "react";

import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container mt-5">
				<Jumbotron
					title="A Warm Welcome!"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin ac lacinia sem. In finibus metus elit, in consequat nunc suscipit et. 
                    Praesent eu mauris et neque."
					buttonLabel="Call to action!"
					buttonURL="https://reactjs.org/"
				/>
				<div className="row mt 3">
					<div className="col-sm-3">
						<Card
							cardImage="https://lh3.googleusercontent.com/proxy/mKl0isXAF68Sn0oCDIHDuE49REZJIGjpupvH1tHSSFraBDRnvYkCdZH8422oY6-hxGj4Hh1LdnW7Wf669lQSihY"
							cardTitle="Card title"
							cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacinia sem. In finibus metus elit, in consequat nunc suscipit et. Praesent eu mauris et neque."
							cardButtonLabel="Find out More!"
						/>
					</div>
					<div className="col-sm-3">
						<Card
							cardImage="https://lh3.googleusercontent.com/proxy/mKl0isXAF68Sn0oCDIHDuE49REZJIGjpupvH1tHSSFraBDRnvYkCdZH8422oY6-hxGj4Hh1LdnW7Wf669lQSihY"
							cardTitle="Card title"
							cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacinia sem. In finibus metus elit, in consequat nunc suscipit et. Praesent eu mauris et neque."
							cardButtonLabel="Find out More!"
						/>
					</div>
					<div className="col-sm-3">
						<Card
							cardImage="https://lh3.googleusercontent.com/proxy/mKl0isXAF68Sn0oCDIHDuE49REZJIGjpupvH1tHSSFraBDRnvYkCdZH8422oY6-hxGj4Hh1LdnW7Wf669lQSihY"
							cardTitle="Card title"
							cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacinia sem. In finibus metus elit, in consequat nunc suscipit et. Praesent eu mauris et neque."
							cardButtonLabel="Find out More!"
						/>
					</div>
					<div className="col-sm-3">
						<Card
							cardImage="https://lh3.googleusercontent.com/proxy/mKl0isXAF68Sn0oCDIHDuE49REZJIGjpupvH1tHSSFraBDRnvYkCdZH8422oY6-hxGj4Hh1LdnW7Wf669lQSihY"
							cardTitle="Card title"
							cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacinia sem. In finibus metus elit, in consequat nunc suscipit et. Praesent eu mauris et neque."
							cardButtonLabel="Find out More!"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
