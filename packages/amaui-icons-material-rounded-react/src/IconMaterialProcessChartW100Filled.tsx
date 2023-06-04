import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProcessChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProcessChartW100Filled'

      short_name='ProcessChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.7 17.425q-.125-.05-.175-.2-.05-.15 0-.275L7.65 6.725q.05-.125.188-.163.137-.037.262.013.125.05.175.2.05.15 0 .275L3.15 17.275q-.05.125-.187.163-.138.037-.263-.013Zm5.85 0q-.125-.05-.175-.2-.05-.15 0-.275L13.5 6.725q.05-.125.188-.163.137-.037.262.013.125.05.175.2.05.15 0 .275L9 17.275q-.05.125-.188.163-.137.037-.262-.013Zm5.85 0q-.125-.05-.175-.2-.05-.15 0-.275L19.35 6.725q.05-.125.188-.163.137-.037.262.013.125.05.175.2.05.15 0 .275L14.85 17.275q-.05.125-.187.163-.138.037-.263-.013Z"/>
    </Icon>
  );
});

IconMaterialProcessChartW100Filled.displayName = 'AmauiIconMaterialProcessChartW100Filled';

export default IconMaterialProcessChartW100Filled;
