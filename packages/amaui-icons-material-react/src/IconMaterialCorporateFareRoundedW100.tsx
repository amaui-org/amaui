import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCorporateFareRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CorporateFareRoundedW100'
      short_name='CorporateFare'

      {...props}
    >
      <path d="M3.65 19.9Q3.375 19.9 3.163 19.688Q2.95 19.475 2.95 19.2V3.9Q2.95 3.625 3.163 3.412Q3.375 3.2 3.65 3.2H10.95Q11.225 3.2 11.438 3.412Q11.65 3.625 11.65 3.9V7.2H20.35Q20.625 7.2 20.837 7.412Q21.05 7.625 21.05 7.9V19.2Q21.05 19.475 20.837 19.688Q20.625 19.9 20.35 19.9ZM3.65 19.2H10.95V15.9H3.65ZM3.65 15.2H10.95V11.9H3.65ZM3.65 11.2H10.95V7.9H3.65ZM3.65 7.2H10.95V3.9H3.65ZM11.65 19.2H20.35V7.9H11.65ZM14.15 11.9V11.2H17.35V11.9ZM14.15 15.9V15.2H17.35V15.9Z"/>
    </Icon>
  );
});

IconMaterialCorporateFareRoundedW100.displayName = 'AmauiIconMaterialCorporateFareRoundedW100';

export default IconMaterialCorporateFareRoundedW100;
