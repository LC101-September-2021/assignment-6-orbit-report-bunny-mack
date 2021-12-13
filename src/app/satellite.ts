import { htmlAstToRender3Ast } from "@angular/compiler/src/render3/r3_template_transform";
import { OrbitListComponent } from "./orbit-list/orbit-list.component";

export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		if(this.type === "Space Debris") {

			OrbitListComponent.prototype.changeColor = false;
			//changeColor
			return true;
		} else {
			return false;
		}
   }

}

// TODO 3a: fix isSpaceDebris check
