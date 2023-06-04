import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldLessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessFilled'

      short_name='UnfoldLess'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 9.475q-.2 0-.387-.075-.188-.075-.313-.2L8.2 6.1q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275L12 7.1l2.4-2.4q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-3.1 3.1q-.15.15-.325.212-.175.063-.375.063ZM8.2 19.3q-.275-.275-.275-.7 0-.425.275-.7l3.1-3.1q.15-.15.325-.212.175-.063.375-.063t.388.063q.187.062.312.212l3.125 3.125q.275.275.262.687-.012.413-.287.688-.275.275-.7.275-.425 0-.7-.275L12 16.9l-2.4 2.4q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialUnfoldLessFilled.displayName = 'AmauiIconMaterialUnfoldLessFilled';

export default IconMaterialUnfoldLessFilled;
