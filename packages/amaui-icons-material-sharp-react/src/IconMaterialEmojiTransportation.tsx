import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiTransportation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiTransportation'

      short_name='EmojiTransportation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 22v-6.35L11.625 11h8.75L22 15.65V22h-2v-1.5h-8V22Zm2-7.5h8l-.7-2h-6.6Zm-.5 1.5v3Zm1.5 2.5q.425 0 .713-.288.287-.287.287-.712t-.287-.712Q13.425 16.5 13 16.5t-.712.288Q12 17.075 12 17.5t.288.712q.287.288.712.288Zm6 0q.425 0 .712-.288.288-.287.288-.712t-.288-.712Q19.425 16.5 19 16.5t-.712.288Q18 17.075 18 17.5t.288.712q.287.288.712.288ZM6 14v-2h2v2Zm5-6V6h2v2ZM6 18v-2h2v2Zm0 4v-2h2v2Zm-4 0V8h5V2h10v7h-2V4H9v6H4v12Zm9.5-3h9v-3h-9Z"/>
    </Icon>
  );
});

IconMaterialEmojiTransportation.displayName = 'AmauiIconMaterialEmojiTransportation';

export default IconMaterialEmojiTransportation;
