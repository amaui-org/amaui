import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaleRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaleRoundedW100'
      short_name='Male'

      {...props}
    >
      <path d="M9.5 19.35Q7.475 19.35 6.062 17.938Q4.65 16.525 4.65 14.5Q4.65 12.475 6.062 11.062Q7.475 9.65 9.5 9.65Q10.375 9.65 11.163 9.987Q11.95 10.325 12.675 10.825L18.15 5.35H15Q14.85 5.35 14.75 5.25Q14.65 5.15 14.65 5Q14.65 4.85 14.75 4.75Q14.85 4.65 15 4.65H18.6Q18.925 4.65 19.138 4.862Q19.35 5.075 19.35 5.4V9Q19.35 9.15 19.25 9.25Q19.15 9.35 19 9.35Q18.85 9.35 18.75 9.25Q18.65 9.15 18.65 9V5.875L13.175 11.3Q13.675 12.025 14.013 12.825Q14.35 13.625 14.35 14.5Q14.35 16.525 12.938 17.938Q11.525 19.35 9.5 19.35ZM9.5 10.35Q7.775 10.35 6.562 11.562Q5.35 12.775 5.35 14.5Q5.35 16.225 6.562 17.438Q7.775 18.65 9.5 18.65Q11.225 18.65 12.438 17.438Q13.65 16.225 13.65 14.5Q13.65 12.775 12.438 11.562Q11.225 10.35 9.5 10.35Z"/>
    </Icon>
  );
});

IconMaterialMaleRoundedW100.displayName = 'AmauiIconMaterialMaleRoundedW100';

export default IconMaterialMaleRoundedW100;
