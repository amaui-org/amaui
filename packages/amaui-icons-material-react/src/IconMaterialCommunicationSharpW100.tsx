import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommunicationSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommunicationSharpW100'
      short_name='Communication'

      {...props}
    >
      <path d="m10.4 12.875-.5-.5q.275-.5.275-1.338 0-.837-.3-1.337l.5-.5q.5.725.512 1.837.013 1.113-.487 1.838Zm1.9 1.875-.5-.5q1.125-1.425 1.125-3.238 0-1.812-1.125-3.237l.5-.5q.65.825.975 1.787.325.963.325 1.95 0 .988-.325 1.95-.325.963-.975 1.788ZM5 11.35q-.575 0-.963-.388-.387-.387-.387-.962t.387-.963Q4.425 8.65 5 8.65t.963.387q.387.388.387.963t-.387.962q-.388.388-.963.388Zm-3.35 4v-.05q0-.375.225-.663.225-.287.6-.462.575-.275 1.213-.4.637-.125 1.312-.125t1.312.125q.638.125 1.213.4.375.175.6.462.225.288.225.663v.05Zm17.35-4q-.575 0-.962-.388-.388-.387-.388-.962t.388-.963q.387-.387.962-.387t.963.387q.387.388.387.963t-.387.962q-.388.388-.963.388Zm-3.35 4v-.05q0-.375.225-.663.225-.287.6-.462.575-.275 1.213-.4.637-.125 1.312-.125t1.312.125q.638.125 1.213.4.375.175.6.462.225.288.225.663v.05Z"/>
    </Icon>
  );
});

IconMaterialCommunicationSharpW100.displayName = 'AmauiIconMaterialCommunicationSharpW100';

export default IconMaterialCommunicationSharpW100;
