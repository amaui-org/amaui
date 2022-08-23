import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStrikethroughSSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrikethroughSSharpFilled'
      short_name='StrikethroughS'

      {...props}
    >
      <path d="M12.15 20Q10.25 20 8.775 18.875Q7.3 17.75 6.65 15.8L8.85 14.85Q9.2 16.05 10.062 16.825Q10.925 17.6 12.2 17.6Q13.25 17.6 14.1 17.1Q14.95 16.6 14.95 15.5Q14.95 15.05 14.775 14.675Q14.6 14.3 14.3 14H17.1Q17.225 14.35 17.288 14.712Q17.35 15.075 17.35 15.5Q17.35 17.65 15.812 18.825Q14.275 20 12.15 20ZM2 12V10H22V12ZM12.05 3.85Q13.7 3.85 14.938 4.662Q16.175 5.475 16.85 7.15L14.65 8.125Q14.425 7.4 13.812 6.825Q13.2 6.25 12.1 6.25Q11.075 6.25 10.4 6.713Q9.725 7.175 9.65 8Q9.65 8 9.65 8Q9.65 8 9.65 8H7.25Q7.25 8 7.25 8Q7.25 8 7.25 8Q7.3 6.275 8.613 5.062Q9.925 3.85 12.05 3.85Z"/>
    </Icon>
  );
});

IconMaterialStrikethroughSSharpFilled.displayName = 'AmauiIconMaterialStrikethroughSSharpFilled';

export default IconMaterialStrikethroughSSharpFilled;
