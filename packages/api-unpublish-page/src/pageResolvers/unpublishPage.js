// @flow
import { Response } from "@webiny/api";
type GetModelType = (context: Object) => Function;

export default (getModel: GetModelType) => async (
    root: any,
    args: Object,
    context: Object
) => {
    const Page = getModel(context);
    const page = await Page.findOne({ query: { id: args.page }});
    page.published = false;
    return new Response(await page.save());
};
