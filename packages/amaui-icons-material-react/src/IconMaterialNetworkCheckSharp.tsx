import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkCheckSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCheckSharp'
      short_name='NetworkCheck'

      {...props}
    >
      <path d="M11.3 19.85Q10.55 19.575 10.188 18.837Q9.825 18.1 10.1 17.3Q10.225 16.95 11.038 15.312Q11.85 13.675 12.838 11.675Q13.825 9.675 14.763 7.787Q15.7 5.9 16.1 5.1Q16.225 4.9 16.4 4.837Q16.575 4.775 16.8 4.85Q17 4.925 17.1 5.1Q17.2 5.275 17.15 5.5Q16.95 6.375 16.45 8.438Q15.95 10.5 15.413 12.675Q14.875 14.85 14.438 16.613Q14 18.375 13.9 18.65Q13.6 19.45 12.85 19.8Q12.1 20.15 11.3 19.85ZM21.9 11.1Q21.15 10.35 20.288 9.725Q19.425 9.1 18.45 8.6L19.15 5.6Q20.5 6.25 21.725 7.1Q22.95 7.95 24 9ZM2.1 11.1 0 9Q2.3 6.65 5.375 5.325Q8.45 4 12 4Q12.6 4 13.2 4.037Q13.8 4.075 14.4 4.15L12.9 7.05Q12.6 7 12.413 7Q12.225 7 12 7Q9.1 7 6.562 8.087Q4.025 9.175 2.1 11.1ZM17.65 15.35Q17.5 15.2 17.325 15.05Q17.15 14.9 16.95 14.75L17.75 11.6Q18.275 11.975 18.788 12.363Q19.3 12.75 19.75 13.2ZM6.35 15.35 4.25 13.2Q5.65 11.8 7.463 10.987Q9.275 10.175 11.4 10.05L9.8 13.3Q8.825 13.6 7.95 14.113Q7.075 14.625 6.35 15.35Z"/>
    </Icon>
  );
});

IconMaterialNetworkCheckSharp.displayName = 'AmauiIconMaterialNetworkCheckSharp';

export default IconMaterialNetworkCheckSharp;
