import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNumbers = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Numbers'

      short_name='Numbers'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9 16-.825 3.275q-.075.325-.325.525t-.6.2q-.475 0-.775-.375-.3-.375-.175-.825L7 16H4.275q-.5 0-.8-.387-.3-.388-.175-.863.075-.35.35-.55.275-.2.625-.2H7.5l1-4H5.775q-.5 0-.8-.387-.3-.388-.175-.863.075-.35.35-.55.275-.2.625-.2H9l.825-3.275Q9.9 4.4 10.15 4.2t.6-.2q.475 0 .775.375.3.375.175.825L11 8h4l.825-3.275q.075-.325.325-.525t.6-.2q.475 0 .775.375.3.375.175.825L17 8h2.725q.5 0 .8.387.3.388.175.863-.075.35-.35.55-.275.2-.625.2H16.5l-1 4h2.725q.5 0 .8.387.3.388.175.863-.075.35-.35.55-.275.2-.625.2H15l-.825 3.275q-.075.325-.325.525t-.6.2q-.475 0-.775-.375-.3-.375-.175-.825L13 16Zm.5-2h4l1-4h-4Z"/>
    </Icon>
  );
});

IconMaterialNumbers.displayName = 'AmauiIconMaterialNumbers';

export default IconMaterialNumbers;
