import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLayers = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Layers'

      short_name='Layers'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.525q-.325 0-.637-.112-.313-.113-.588-.313l-6.75-5.25q-.4-.3-.387-.788.012-.487.412-.787.275-.2.6-.2.325 0 .6.2L12 18.5l6.75-5.225q.275-.2.6-.2.325 0 .6.2.4.3.413.787.012.488-.388.788l-6.75 5.25q-.275.2-.587.313-.313.112-.638.112Zm0-5.05q-.325 0-.637-.112-.313-.113-.588-.313L4.025 9.8q-.2-.15-.3-.362-.1-.213-.1-.438t.1-.438q.1-.212.3-.362l6.75-5.25q.275-.2.588-.313.312-.112.637-.112t.638.112q.312.113.587.313l6.75 5.25q.2.15.3.362.1.213.1.438t-.1.438q-.1.212-.3.362l-6.75 5.25q-.275.2-.587.313-.313.112-.638.112Zm0-2.025L17.75 9 12 4.55 6.25 9ZM12 9Z"/>
    </Icon>
  );
});

IconMaterialLayers.displayName = 'AmauiIconMaterialLayers';

export default IconMaterialLayers;
