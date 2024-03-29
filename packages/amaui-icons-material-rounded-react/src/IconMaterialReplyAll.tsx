import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplyAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyAll'

      short_name='ReplyAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.3 16.3-4.6-4.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.6-4.6q.275-.275.688-.288Q8.4 5.4 8.7 5.7q.3.275.312.687.013.413-.287.713l-3.9 3.9 3.9 3.9q.275.275.287.7.013.425-.287.7-.275.3-.7.3-.425 0-.725-.3ZM21 19q-.425 0-.712-.288Q20 18.425 20 18v-3q0-1.25-.875-2.125T17 12h-6.175l2.9 2.9q.275.275.287.7.013.425-.287.7-.275.3-.7.3-.425 0-.725-.3l-4.6-4.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.6-4.6q.275-.275.688-.288.412-.012.712.288.3.275.312.687.013.413-.287.713l-2.9 2.9H17q2.075 0 3.538 1.462Q22 12.925 22 15v3q0 .425-.288.712Q21.425 19 21 19Z"/>
    </Icon>
  );
});

IconMaterialReplyAll.displayName = 'AmauiIconMaterialReplyAll';

export default IconMaterialReplyAll;
