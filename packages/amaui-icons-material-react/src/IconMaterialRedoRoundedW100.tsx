import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRedoRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedoRoundedW100'
      short_name='Redo'

      {...props}
    >
      <path d="M10.025 18.35Q7.9 18.35 6.338 16.962Q4.775 15.575 4.775 13.5Q4.775 11.425 6.338 10.037Q7.9 8.65 10.025 8.65H17.875L14.875 5.65Q14.775 5.55 14.762 5.412Q14.75 5.275 14.875 5.15Q15 5.025 15.125 5.025Q15.25 5.025 15.375 5.15L18.7 8.475Q18.825 8.6 18.875 8.725Q18.925 8.85 18.925 9Q18.925 9.15 18.875 9.275Q18.825 9.4 18.7 9.525L15.375 12.85Q15.275 12.95 15.137 12.962Q15 12.975 14.875 12.85Q14.75 12.725 14.75 12.6Q14.75 12.475 14.875 12.35L17.875 9.35H10.025Q8.175 9.35 6.825 10.525Q5.475 11.7 5.475 13.5Q5.475 15.3 6.825 16.475Q8.175 17.65 10.025 17.65H16.125Q16.275 17.65 16.375 17.75Q16.475 17.85 16.475 18Q16.475 18.15 16.375 18.25Q16.275 18.35 16.125 18.35Z"/>
    </Icon>
  );
});

IconMaterialRedoRoundedW100.displayName = 'AmauiIconMaterialRedoRoundedW100';

export default IconMaterialRedoRoundedW100;
