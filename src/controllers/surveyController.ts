import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repository/surveyRepository';

class SurveysController {
    async create(request: Request, response: Response) {
        const { title, description } = request.body;
        const surveyRepository = getCustomRepository(SurveysRepository)

        const surveys = surveyRepository.create({
            title,
            description
        })

        await surveyRepository.save(surveys);

        return response.status(201).json(surveys);
    }

    async show(request: Request, response: Response) {
        const surveyRepository = getCustomRepository(SurveysRepository)
        const all = await surveyRepository.find();

        return response.json(all);
    }
}

export { SurveysController };