import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPizzaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPizzaW100'

      short_name='LocalPizza'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.45q-.35 0-.688-.162-.337-.163-.562-.513L4.15 7.9q-.175-.275-.112-.562.062-.288.312-.463 1.7-1.2 3.638-1.888Q9.925 4.3 12 4.3q2.075 0 4.025.687 1.95.688 3.65 1.888.25.175.3.463.05.287-.125.562l-6.6 9.875q-.225.325-.562.5-.338.175-.688.175Zm-.675-1.05q.25.35.675.35.425 0 .675-.35L19.3 7.45q-1.625-1.125-3.475-1.788Q13.975 5 12 5t-3.812.662Q6.35 6.325 4.7 7.45ZM8.65 9.25q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm3.35 5.1q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm0-2.925Z"/>
    </Icon>
  );
});

IconMaterialLocalPizzaW100.displayName = 'AmauiIconMaterialLocalPizzaW100';

export default IconMaterialLocalPizzaW100;
