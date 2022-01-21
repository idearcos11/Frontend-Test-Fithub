interface Field{
    country: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    post_code: string;
    street_address: string;
}

interface Question{
    title: string
    fields: QuestionField[]
}

interface QuestionField{
    name:string;
    label:string;
    type:string;
    options:string[]
}

export {Field, Question, QuestionField};