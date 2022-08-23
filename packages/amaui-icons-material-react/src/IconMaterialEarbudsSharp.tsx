import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEarbudsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsSharp'
      short_name='Earbuds'

      {...props}
    >
      <path d="M8 21Q5.925 21 4.463 19.538Q3 18.075 3 16V6.2Q3 4.85 3.825 3.925Q4.65 3 6 3H9V9H5V16Q5 17.25 5.875 18.125Q6.75 19 8 19Q9.25 19 10.125 18.125Q11 17.25 11 16V8Q11 5.925 12.463 4.463Q13.925 3 16 3Q18.075 3 19.538 4.463Q21 5.925 21 8V18Q21 19.275 20.038 20.137Q19.075 21 17.8 21H15V15H19V8Q19 6.75 18.125 5.875Q17.25 5 16 5Q14.75 5 13.875 5.875Q13 6.75 13 8V16Q13 18.075 11.538 19.538Q10.075 21 8 21ZM5 7H7V5H6Q5.575 5 5.287 5.287Q5 5.575 5 6ZM17 19H18Q18.425 19 18.712 18.712Q19 18.425 19 18V17H17ZM6 6Q6 6 6 6Q6 6 6 6ZM18 18Q18 18 18 18Q18 18 18 18Z"/>
    </Icon>
  );
});

IconMaterialEarbudsSharp.displayName = 'AmauiIconMaterialEarbudsSharp';

export default IconMaterialEarbudsSharp;
