import PropTypes from 'prop-types';
import React from 'react';
import Input from '@/utils/generalComponents/Input';
import { GLOBALCONSTANTS } from '@/utils/GlobalConstants';
import { loaderStartAction } from '@/redux/loaderService/LoaderAction';
import { geneInfoBySymbolAction, resetAction } from '@/redux/transcript/TranscriptAction';
import Transcript from '@/containers/Transcript';
import { checkEmpty } from '@/utils/commonFunctions/CommonFunctions';
import localization from '@/utils/localization';
import Heading from '@/utils/generalComponents/Heading';
import RadioButton from '@/utils/generalComponents/RadioButton';
import Error from '@/utils/generalComponents/Error';
/**
 * @summary Guide Page Renderer
 * @class
 * @classdesc Renders the login page, and renders select/skip preferences after user loggs in and after that renders guide page
 * @author Sabohi Zaidi <sabuhizaidi616@gmail.com>
 * @component
 * @category Landing page
 * @subcategory Handling of Login, Preferences and Guide page
 */
class Proteins extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      symbol: '',
      position: '',
      letter: '',
      formErrors: { symbol: false, position: false, letter: false },
      formValid: false,
      type: false,
      checked: false,
    };
  }

  /**
   * @summary Fields Validator
   * @description Validates the meeting form and updates the state accordingly
   * @param {Object} props Properties of the component
   * @author Sabohi Zaidi <sabuhizaidi616@gmail.com>
   * @function
   */
  validateFields = (name, value) => {
    const { formErrors } = this.state;
    const formErrorsCopy = { ...formErrors };
    formErrorsCopy[name] = !!value;
    const formValid = formErrorsCopy.symbol && formErrorsCopy.position && formErrorsCopy.letter;
    this.setState({
      formErrors: formErrorsCopy,
      formValid,
      type: true,
    });
  };

  handleUserInput = (event) => {
    const { dispatch } = this.props;
    const { name, value } = event.target;
    dispatch(resetAction());
    this.setState(
      {
        [name]: value,
        checked: false,
      },
      () => this.validateFields(name, value),
    );
  };

  saveForm = (event) => {
    const eve = event?.target;
    this.setState({
      checked: eve.name,
    });
    const { dispatch } = this.props;
    const { symbol, position, letter } = this.state;
    const positionPassed = eve?.value === 'custom' ? position - 10 : position;
    const paramObj = {
      symbol,
      position: positionPassed,
      letter,
    };
    dispatch(loaderStartAction());
    dispatch(geneInfoBySymbolAction(paramObj));
  };

  render() {
    const { symbol, position, letter, formValid, formErrors, type, checked } = this.state;
    const { transcriptList, transcriptError } = this.props;
    const { PLACEHOLDERS } = GLOBALCONSTANTS || {};
    const { GENE_SYMBOL, POSITION, LETTER } = PLACEHOLDERS || {};

    return (
        <div className="main-container container">
          <div className="row full-width innerpage">
            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 survey-list">
              <Heading className="no-data" value={1}>
                {localization.header.transcriptHeadng}
              </Heading>
              <form className="form-width">
                <div className="form-group">
                  <label htmlFor="symbol">Symbol</label>
                  <Input
                    type="text"
                    name="symbol"
                    id="symbol"
                    placeholder={GENE_SYMBOL}
                    value={symbol}
                    className="form-control input-box"
                    onChange={this.handleUserInput}
                    autoComplete="off"
                  />
                  {type && !formValid && !formErrors.symbol && <Error color="red" message={localization.msgs.error} />}
                </div>
                <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <Input
                    type="text"
                    name="position"
                    id="position"
                    placeholder={POSITION}
                    value={position}
                    className="form-control input-box"
                    onChange={this.handleUserInput}
                    autoComplete="off"
                  />
                  {type && !formValid && !formErrors.position && <Error color="red" message={localization.msgs.error} />}
                </div>

                <div className="form-group">
                  <label htmlFor="letter">Letter</label>
                  <Input
                    type="letter"
                    name="letter"
                    id="letter"
                    placeholder={LETTER}
                    value={letter}
                    className="form-control input-box"
                    onChange={this.handleUserInput}
                    autoComplete="off"
                  />
                  {type && !formValid && !formErrors.letter && <Error color="red" message={localization.msgs.error} />}
                </div>
                <h6>
                  <RadioButton
                    key="normal"
                    isDisabled={!formValid}
                    className="radio-main cursor-pointer"
                    name="normal"
                    value="normal"
                    checked={checked === 'normal'}
                    onChange={this.saveForm}
                  />
                  {localization.buttons.normalBtnText}
                </h6>
                <h6>
                  <RadioButton
                    key="custom"
                    isDisabled={!formValid}
                    className="radio-main cursor-pointer"
                    name="custom"
                    value="custom"
                    checked={checked === 'custom'}
                    onChange={this.saveForm}
                  />
                  {localization.buttons.customBtnText}
                </h6>

                {!checkEmpty(transcriptError) || checkEmpty(transcriptList) ? (
                  <h6 className="no-data">{localization.transcript.noDataFound}</h6>
                ) : (
                  <Transcript transcriptList={transcriptList} itemsPerPage={1} />
                )}
              </form>
            </div>
          </div>
        </div>
    );
  }
}

Proteins.propTypes = {
  /**
   * Redux action dispatcher
   */
  dispatch: PropTypes.func.isRequired,
  /**
   * Array containing transcript details
   */
  transcriptList: PropTypes.oneOfType([PropTypes.array]).isRequired,
  // /**
  //  * Error object
  //  */
  transcriptError: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Proteins;
