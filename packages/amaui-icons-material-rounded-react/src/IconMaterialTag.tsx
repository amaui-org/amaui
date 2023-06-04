import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTag = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tag'

      short_name='Tag'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.25 20q-.475 0-.775-.375-.3-.375-.175-.825L7 16H4.775q-.5 0-.8-.387-.3-.388-.175-.863.075-.35.35-.55.275-.2.625-.2H7.5l1-4H5.775q-.5 0-.8-.387-.3-.388-.175-.863.075-.35.35-.55.275-.2.625-.2H9l.825-3.275Q9.9 4.4 10.15 4.2t.6-.2q.475 0 .775.375.3.375.175.825L11 8h4l.825-3.275q.075-.325.325-.525t.6-.2q.475 0 .775.375.3.375.175.825L17 8h2.225q.5 0 .8.387.3.388.175.863-.075.35-.35.55-.275.2-.625.2H16.5l-1 4h2.725q.5 0 .8.387.3.388.175.863-.075.35-.35.55-.275.2-.625.2H15l-.825 3.275q-.075.325-.325.525t-.6.2q-.475 0-.775-.375-.3-.375-.175-.825L13 16H9l-.825 3.275q-.075.325-.325.525t-.6.2Zm2.25-6h4l1-4h-4Z"/>
    </Icon>
  );
});

IconMaterialTag.displayName = 'AmauiIconMaterialTag';

export default IconMaterialTag;
