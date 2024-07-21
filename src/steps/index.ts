import { LoginSteps } from "./loginSteps"
import { applyMixins } from "../helpers/utils";

class Steps {};

interface Steps extends LoginSteps {}

applyMixins(Steps, [LoginSteps]);

export { Steps };