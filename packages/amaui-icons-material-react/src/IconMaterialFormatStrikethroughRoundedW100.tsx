import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatStrikethroughRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatStrikethroughRoundedW100'
      short_name='FormatStrikethrough'

      {...props}
    >
      <path d="M3.5 13.35Q3.35 13.35 3.25 13.25Q3.15 13.15 3.15 13Q3.15 12.85 3.25 12.75Q3.35 12.65 3.5 12.65H20.5Q20.65 12.65 20.75 12.75Q20.85 12.85 20.85 13Q20.85 13.15 20.75 13.25Q20.65 13.35 20.5 13.35ZM11.65 10.65V5.85H6.5Q6.35 5.85 6.25 5.75Q6.15 5.65 6.15 5.5Q6.15 5.35 6.25 5.25Q6.35 5.15 6.5 5.15H17.5Q17.65 5.15 17.75 5.25Q17.85 5.35 17.85 5.5Q17.85 5.65 17.75 5.75Q17.65 5.85 17.5 5.85H12.35V10.65ZM12 18.85Q11.85 18.85 11.75 18.75Q11.65 18.65 11.65 18.5V15.35H12.35V18.5Q12.35 18.65 12.25 18.75Q12.15 18.85 12 18.85Z"/>
    </Icon>
  );
});

IconMaterialFormatStrikethroughRoundedW100.displayName = 'AmauiIconMaterialFormatStrikethroughRoundedW100';

export default IconMaterialFormatStrikethroughRoundedW100;
