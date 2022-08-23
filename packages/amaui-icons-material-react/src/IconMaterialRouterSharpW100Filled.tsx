import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRouterSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RouterSharpW100Filled'
      short_name='Router'

      {...props}
    >
      <path d="M3.875 19.7V14.3H15.225V10.3H15.925V14.3H19.275V19.7ZM7.275 17.7V16.3H5.875V17.7ZM9.375 17.7H10.775V16.3H9.375ZM12.875 17.7H14.275V16.3H12.875ZM13.375 8.45 12.875 7.95Q13.525 7.35 14.175 7.075Q14.825 6.8 15.575 6.8Q16.325 6.8 16.975 7.075Q17.625 7.35 18.275 7.95L17.775 8.45Q17.325 8 16.788 7.75Q16.25 7.5 15.575 7.5Q14.9 7.5 14.363 7.75Q13.825 8 13.375 8.45ZM10.875 5.95 10.375 5.45Q11.4 4.425 12.713 3.862Q14.025 3.3 15.575 3.3Q17.125 3.3 18.438 3.862Q19.75 4.425 20.775 5.45L20.275 5.95Q19.45 5.125 18.263 4.562Q17.075 4 15.575 4Q14.075 4 12.888 4.562Q11.7 5.125 10.875 5.95Z"/>
    </Icon>
  );
});

IconMaterialRouterSharpW100Filled.displayName = 'AmauiIconMaterialRouterSharpW100Filled';

export default IconMaterialRouterSharpW100Filled;
