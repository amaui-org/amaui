import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWcSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WcSharpW100'
      short_name='Wc'

      {...props}
    >
      <path d="M6.35 21.35V14.5H4.85V7.65H10.15V14.5H8.65V21.35ZM15.65 21.35V16H13.4L15.475 7.65H17.525L19.6 16H17.35V21.35ZM7.5 6.6Q6.825 6.6 6.363 6.137Q5.9 5.675 5.9 5Q5.9 4.325 6.363 3.862Q6.825 3.4 7.5 3.4Q8.175 3.4 8.637 3.862Q9.1 4.325 9.1 5Q9.1 5.675 8.637 6.137Q8.175 6.6 7.5 6.6ZM16.5 6.6Q15.825 6.6 15.363 6.137Q14.9 5.675 14.9 5Q14.9 4.325 15.363 3.862Q15.825 3.4 16.5 3.4Q17.175 3.4 17.638 3.862Q18.1 4.325 18.1 5Q18.1 5.675 17.638 6.137Q17.175 6.6 16.5 6.6Z"/>
    </Icon>
  );
});

IconMaterialWcSharpW100.displayName = 'AmauiIconMaterialWcSharpW100';

export default IconMaterialWcSharpW100;
