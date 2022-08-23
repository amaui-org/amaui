import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHailSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HailSharpW100Filled'
      short_name='Hail'

      {...props}
    >
      <path d="M12 5.7Q11.325 5.7 10.863 5.237Q10.4 4.775 10.4 4.1Q10.4 3.425 10.863 2.962Q11.325 2.5 12 2.5Q12.675 2.5 13.138 2.962Q13.6 3.425 13.6 4.1Q13.6 4.775 13.138 5.237Q12.675 5.7 12 5.7ZM10.05 21.35V8.475Q8.4 8.9 7.513 9.95Q6.625 11 6.4 12.85H5.7Q5.925 10.25 7.588 8.9Q9.25 7.55 12 7.55Q14.65 7.55 16.075 6.812Q17.5 6.075 17.65 3.55H18.35Q18.275 5.65 17.175 6.812Q16.075 7.975 13.95 8.15V21.35H13.25V15.5H10.75V21.35ZM5.15 21.35V16.65H6.85V21.35Z"/>
    </Icon>
  );
});

IconMaterialHailSharpW100Filled.displayName = 'AmauiIconMaterialHailSharpW100Filled';

export default IconMaterialHailSharpW100Filled;
