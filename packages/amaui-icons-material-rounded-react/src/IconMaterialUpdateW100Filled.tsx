import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpdateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateW100Filled'

      short_name='Update'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.45 11.85 15.6 15q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125l-3.125-3.125q-.125-.125-.175-.25-.05-.125-.05-.275v-4.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25Zm-.35 7.85q-1.6 0-3-.6t-2.45-1.65Q5.6 16.4 5 15q-.6-1.4-.6-3T5 9q.6-1.4 1.65-2.45Q7.7 5.5 9.1 4.9q1.4-.6 3-.6 1.625 0 3.1.662 1.475.663 2.6 1.838V4.75q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.5q0 .325-.212.537Q18.075 8 17.75 8h-2.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.05q-1.05-1.075-2.375-1.688Q13.6 5 12.1 5 9.175 5 7.138 7.037 5.1 9.075 5.1 12q0 2.925 2.038 4.962Q9.175 19 12.1 19q2.5 0 4.4-1.587 1.9-1.588 2.45-4.013.05-.15.15-.238.1-.087.25-.037.15.05.225.175.075.125.025.275-.525 2.7-2.638 4.412Q14.85 19.7 12.1 19.7Z"/>
    </Icon>
  );
});

IconMaterialUpdateW100Filled.displayName = 'AmauiIconMaterialUpdateW100Filled';

export default IconMaterialUpdateW100Filled;
