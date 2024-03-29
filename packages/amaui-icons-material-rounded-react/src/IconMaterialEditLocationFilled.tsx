import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationFilled'

      short_name='EditLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 13.5h.75q.05 0 .35-.15l3.75-3.775-1.425-1.425L8.65 11.9q-.05.05-.15.35V13q0 .2.15.35.15.15.35.15Zm4.15-6.075 1.425 1.425.7-.7q.125-.125.125-.263 0-.137-.125-.262l-.9-.9q-.125-.125-.262-.125-.138 0-.263.125ZM12 21.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363 4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163-1.8 2.762-5.45 5.987-.15.125-.35.2-.2.075-.4.075Z"/>
    </Icon>
  );
});

IconMaterialEditLocationFilled.displayName = 'AmauiIconMaterialEditLocationFilled';

export default IconMaterialEditLocationFilled;
