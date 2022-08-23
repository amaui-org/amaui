import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaleSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaleSharpW100Filled'
      short_name='Male'

      {...props}
    >
      <path d="M19.35 4.65V9.35H18.65V5.875L13.175 11.3Q13.675 12.025 14.013 12.825Q14.35 13.625 14.35 14.5Q14.35 16.525 12.938 17.938Q11.525 19.35 9.5 19.35Q7.475 19.35 6.062 17.938Q4.65 16.525 4.65 14.5Q4.65 12.475 6.062 11.062Q7.475 9.65 9.5 9.65Q10.375 9.65 11.163 9.987Q11.95 10.325 12.675 10.825L18.15 5.35H14.65V4.65ZM9.5 10.35Q7.775 10.35 6.562 11.562Q5.35 12.775 5.35 14.5Q5.35 16.225 6.562 17.438Q7.775 18.65 9.5 18.65Q11.225 18.65 12.438 17.438Q13.65 16.225 13.65 14.5Q13.65 12.775 12.438 11.562Q11.225 10.35 9.5 10.35Z"/>
    </Icon>
  );
});

IconMaterialMaleSharpW100Filled.displayName = 'AmauiIconMaterialMaleSharpW100Filled';

export default IconMaterialMaleSharpW100Filled;
