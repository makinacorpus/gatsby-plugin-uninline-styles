/* eslint-disable no-param-reassign */

exports.onPreRenderHTML = ({ getHeadComponents }) => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  const headComponents = getHeadComponents();

  headComponents.forEach(element => {
    if (element.type === 'style' && element.props['data-href']) {
      element.type = 'link';
      element.props.href = element.props['data-href'];
      element.props.rel = 'stylesheet';
      element.props.type = 'text/css';

      delete element.props['data-href'];
      delete element.props.dangerouslySetInnerHTML;
    }
  });
};
