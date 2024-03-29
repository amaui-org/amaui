import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFireplaceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireplaceFilled'

      short_name='Fireplace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.6 16.95q.975.8 2.113.387Q13.85 16.925 14 15.65q.125-1.175-.725-1.738-.85-.562-1.275-1.462-.125.35-.125.65 0 .3.075.65.075.425.175.8.1.375.025.8-.125.45-.55.925-.425.475-1 .675ZM2 22V2h20v20Zm2-2h2v-2h2.25q-.575-.725-.912-1.525Q7 15.675 7 14.95q0-1.15.25-2.163.25-1.012.913-1.962.662-.95 1.837-1.887Q11.175 8 13 7q-.275 1.1.238 2.337.512 1.238 1.912 2.263.825.6 1.338 1.412Q17 13.825 17 15q0 .875-.275 1.613Q16.45 17.35 16 18h2v2h2V4H4Z"/>
    </Icon>
  );
});

IconMaterialFireplaceFilled.displayName = 'AmauiIconMaterialFireplaceFilled';

export default IconMaterialFireplaceFilled;
