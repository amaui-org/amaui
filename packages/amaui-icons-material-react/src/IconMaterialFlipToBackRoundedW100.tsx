import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipToBackRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToBackRoundedW100'
      short_name='FlipToBack'

      {...props}
    >
      <path d="M8.3 9V7H9V9ZM8.3 13V11H9V13ZM8.3 5Q8.3 4.7 8.5 4.5Q8.7 4.3 9 4.3V5ZM11 15.7V15H13V15.7ZM19 5V4.3Q19.3 4.3 19.5 4.5Q19.7 4.7 19.7 5ZM11 5V4.3H13V5ZM9 15.7Q8.65 15.7 8.475 15.525Q8.3 15.35 8.3 15H9ZM19 13V11H19.7V13ZM19 9V7H19.7V9ZM19 15.7V15H19.7Q19.7 15.3 19.5 15.5Q19.3 15.7 19 15.7ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V7.35Q4.3 7.2 4.4 7.1Q4.5 7 4.65 7Q4.8 7 4.9 7.1Q5 7.2 5 7.35V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19H16.65Q16.8 19 16.9 19.1Q17 19.2 17 19.35Q17 19.5 16.9 19.6Q16.8 19.7 16.65 19.7ZM15 5V4.3H17V5ZM15 15.7V15H17V15.7Z"/>
    </Icon>
  );
});

IconMaterialFlipToBackRoundedW100.displayName = 'AmauiIconMaterialFlipToBackRoundedW100';

export default IconMaterialFlipToBackRoundedW100;
