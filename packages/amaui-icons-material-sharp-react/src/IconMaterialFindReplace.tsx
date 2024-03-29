import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFindReplace = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindReplace'

      short_name='FindReplace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.1 10q.35-2.575 2.288-4.287Q8.325 4 11 4q1.475 0 2.763.562Q15.05 5.125 16 6.1V4h2v6h-6V8h3q-.725-.9-1.738-1.45Q12.25 6 11 6 9.2 6 7.825 7.137 6.45 8.275 6.1 10Zm15.5 11-4.4-4.4q-.9.675-1.962 1.037Q12.175 18 11 18q-1.475 0-2.762-.562Q6.95 16.875 6 15.9V18H4v-6h6v2H7q.725.9 1.738 1.45Q9.75 16 11 16q1.8 0 3.175-1.137Q15.55 13.725 15.9 12h2q-.125.9-.45 1.688-.325.787-.85 1.512l4.4 4.4Z"/>
    </Icon>
  );
});

IconMaterialFindReplace.displayName = 'AmauiIconMaterialFindReplace';

export default IconMaterialFindReplace;
