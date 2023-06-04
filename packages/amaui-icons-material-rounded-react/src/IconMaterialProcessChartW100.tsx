import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProcessChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProcessChartW100'

      short_name='ProcessChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.45 17.425q-.125-.05-.175-.2-.05-.15 0-.275L8.4 6.725q.05-.125.188-.163.137-.037.262.013.125.05.175.2.05.15 0 .275L3.9 17.275q-.05.125-.187.163-.138.037-.263-.013Zm5.85 0q-.125-.05-.175-.2-.05-.15 0-.275L14.25 6.725q.05-.125.188-.163.137-.037.262.013.125.05.175.2.05.15 0 .275L9.75 17.275q-.05.125-.188.163-.137.037-.262-.013Zm5.85 0q-.125-.05-.175-.2-.05-.15 0-.275L20.1 6.725q.05-.125.188-.163.137-.037.262.013.125.05.175.2.05.15 0 .275L15.6 17.275q-.05.125-.187.163-.138.037-.263-.013Z"/>
    </Icon>
  );
});

IconMaterialProcessChartW100.displayName = 'AmauiIconMaterialProcessChartW100';

export default IconMaterialProcessChartW100;
