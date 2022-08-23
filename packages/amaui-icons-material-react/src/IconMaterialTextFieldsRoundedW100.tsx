import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextFieldsRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFieldsRoundedW100'
      short_name='TextFields'

      {...props}
    >
      <path d="M8.5 18.85Q8.35 18.85 8.25 18.75Q8.15 18.65 8.15 18.5V5.85H3.5Q3.35 5.85 3.25 5.75Q3.15 5.65 3.15 5.5Q3.15 5.35 3.25 5.25Q3.35 5.15 3.5 5.15H13.5Q13.65 5.15 13.75 5.25Q13.85 5.35 13.85 5.5Q13.85 5.65 13.75 5.75Q13.65 5.85 13.5 5.85H8.85V18.5Q8.85 18.65 8.75 18.75Q8.65 18.85 8.5 18.85ZM17.5 18.85Q17.35 18.85 17.25 18.75Q17.15 18.65 17.15 18.5V10.85H14.5Q14.35 10.85 14.25 10.75Q14.15 10.65 14.15 10.5Q14.15 10.35 14.25 10.25Q14.35 10.15 14.5 10.15H20.5Q20.65 10.15 20.75 10.25Q20.85 10.35 20.85 10.5Q20.85 10.65 20.75 10.75Q20.65 10.85 20.5 10.85H17.85V18.5Q17.85 18.65 17.75 18.75Q17.65 18.85 17.5 18.85Z"/>
    </Icon>
  );
});

IconMaterialTextFieldsRoundedW100.displayName = 'AmauiIconMaterialTextFieldsRoundedW100';

export default IconMaterialTextFieldsRoundedW100;
