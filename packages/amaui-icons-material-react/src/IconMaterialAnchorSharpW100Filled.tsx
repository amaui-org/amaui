import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAnchorSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnchorSharpW100Filled'
      short_name='Anchor'

      {...props}
    >
      <path d="M12 20.85Q10.325 20.85 8.888 20.363Q7.45 19.875 6.4 19.025Q5.35 18.175 4.75 17.012Q4.15 15.85 4.15 14.5V13.05L6.5 14.825L5.15 16.175Q5.875 17.975 7.575 19.013Q9.275 20.05 11.65 20.15V11.1H8.65V10.4H11.65V7.825Q10.8 7.65 10.225 7.012Q9.65 6.375 9.65 5.5Q9.65 4.525 10.338 3.837Q11.025 3.15 12 3.15Q12.975 3.15 13.663 3.837Q14.35 4.525 14.35 5.5Q14.35 6.375 13.775 7.012Q13.2 7.65 12.35 7.825V10.4H15.35V11.1H12.35V20.15Q14.725 20.05 16.438 19.025Q18.15 18 18.85 16.2L17.5 14.825L19.85 13.05V14.5Q19.85 15.85 19.25 17.012Q18.65 18.175 17.6 19.025Q16.55 19.875 15.113 20.363Q13.675 20.85 12 20.85ZM12 7.15Q12.675 7.15 13.163 6.662Q13.65 6.175 13.65 5.5Q13.65 4.825 13.163 4.337Q12.675 3.85 12 3.85Q11.325 3.85 10.838 4.337Q10.35 4.825 10.35 5.5Q10.35 6.175 10.838 6.662Q11.325 7.15 12 7.15Z"/>
    </Icon>
  );
});

IconMaterialAnchorSharpW100Filled.displayName = 'AmauiIconMaterialAnchorSharpW100Filled';

export default IconMaterialAnchorSharpW100Filled;
