import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanToolAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAlt'

      short_name='PanToolAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.625 21q-.425 0-.8-.163-.375-.162-.65-.437L5.45 16.675q-.5-.5-.562-1.25-.063-.75.287-1.35.325-.55.887-.775.563-.225 1.063-.1l1.95.45V5.5q0-1.05.725-1.775Q10.525 3 11.575 3q1.05 0 1.775.725.725.725.725 1.775v4.3h.65q.125 0 .225.05t.225.1l3.7 1.8q.6.275.888.887.287.613.162 1.263l-.9 5.45q-.125.725-.7 1.188-.575.462-1.3.462Zm0-2h6.4l.95-5.45-4.15-2.05h-1.75v-6q0-.225-.137-.363Q11.8 5 11.575 5q-.225 0-.362.137-.138.138-.138.363v10.6l-4.25-.9Zm0 0h6.4Z"/>
    </Icon>
  );
});

IconMaterialPanToolAlt.displayName = 'AmauiIconMaterialPanToolAlt';

export default IconMaterialPanToolAlt;
