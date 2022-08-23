import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCategorySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategorySharpW100'
      short_name='Category'

      {...props}
    >
      <path d="M8.3 10 12 3.9 15.7 10ZM17.5 21Q16.025 21 15.013 19.988Q14 18.975 14 17.5Q14 16.025 15.013 15.012Q16.025 14 17.5 14Q18.975 14 19.988 15.012Q21 16.025 21 17.5Q21 18.975 19.988 19.988Q18.975 21 17.5 21ZM4 20.5V14.5H10V20.5ZM17.5 20.3Q18.675 20.3 19.488 19.488Q20.3 18.675 20.3 17.5Q20.3 16.325 19.488 15.512Q18.675 14.7 17.5 14.7Q16.325 14.7 15.512 15.512Q14.7 16.325 14.7 17.5Q14.7 18.675 15.512 19.488Q16.325 20.3 17.5 20.3ZM4.7 19.8H9.3V15.2H4.7ZM9.5 9.3H14.5L12 5.3ZM12 9.3ZM9.3 15.2ZM17.5 17.5Q17.5 17.5 17.5 17.5Q17.5 17.5 17.5 17.5Q17.5 17.5 17.5 17.5Q17.5 17.5 17.5 17.5Q17.5 17.5 17.5 17.5Q17.5 17.5 17.5 17.5Q17.5 17.5 17.5 17.5Q17.5 17.5 17.5 17.5Z"/>
    </Icon>
  );
});

IconMaterialCategorySharpW100.displayName = 'AmauiIconMaterialCategorySharpW100';

export default IconMaterialCategorySharpW100;
