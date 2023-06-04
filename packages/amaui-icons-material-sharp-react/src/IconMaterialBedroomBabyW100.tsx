import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedroomBabyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomBabyW100'

      short_name='BedroomBaby'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.6q1.8 0 3.463-.662 1.662-.663 2.987-1.838l-.5-.5q-.225.225-.55.462-.325.238-.7.438l-1.15-2.05V11.1h1.25v-.7h-5.65l-1.75-3H7.3l.4.3-1.5 1.75.45.5 1.85-1.2v4.65l-1.2 2.1q-.45-.275-.738-.475-.287-.2-.512-.425l-.5.5q1.325 1.175 2.988 1.838Q10.2 17.6 12 17.6Zm0-.7q-.95 0-1.975-.212Q9 16.475 7.9 15.9l1.2-2.15q1.575.6 2.9.6t2.9-.6l1.2 2.15q-1.1.55-2.125.775Q12.95 16.9 12 16.9Zm-8.7 3.8V3.3h17.4v17.4ZM4 20h16V4H4Zm0 0V4v16Z"/>
    </Icon>
  );
});

IconMaterialBedroomBabyW100.displayName = 'AmauiIconMaterialBedroomBabyW100';

export default IconMaterialBedroomBabyW100;
