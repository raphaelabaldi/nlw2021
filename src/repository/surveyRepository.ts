import { EntityRepository, Repository } from "typeorm";
import { Surveys } from "../models/survey";

@EntityRepository(Surveys)
class SurveysRepository extends Repository<Surveys> {

}

export { SurveysRepository };