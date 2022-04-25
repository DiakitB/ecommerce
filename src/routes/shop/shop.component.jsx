import { singWithGoogle, getUsertDocument } from "../../utils/util";
import SingInForm from "../../component/forms/singn-in-form.component";
import SingnUpForm from "../../component/singn-up/singn-u-form.component";
import "./shop.style.scss";
const Sali = () => {
  const Laoder = async () => {
    const { user } = await singWithGoogle();
    await getUsertDocument(user);
  };
  return (
    <div>
      <div className="form-style">
        <SingnUpForm />
        <SingInForm />
      </div>
    </div>
  );
};
export default Sali;
