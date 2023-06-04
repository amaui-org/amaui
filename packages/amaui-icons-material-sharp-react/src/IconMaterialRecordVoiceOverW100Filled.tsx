import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecordVoiceOverW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecordVoiceOverW100Filled'

      short_name='RecordVoiceOver'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.675 14.7-.5-.5q1.025-1.025 1.613-2.363.587-1.337.587-2.837 0-1.5-.587-2.838Q20.2 4.825 19.175 3.8l.5-.5q1.1 1.1 1.75 2.575.65 1.475.65 3.125t-.65 3.125q-.65 1.475-1.75 2.575Zm-3.35-3.35-.5-.5q.375-.375.588-.85.212-.475.212-1 0-.575-.212-1.025-.213-.45-.588-.825l.5-.5q.45.45.725 1.037.275.588.275 1.313 0 .675-.275 1.287-.275.613-.725 1.063Zm-7.7.35q-1.125 0-1.912-.788-.788-.787-.788-1.912t.788-1.912Q7.5 6.3 8.625 6.3t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-6.7 7v-1.3q0-.65.325-1.088.325-.437.925-.712 1.2-.575 2.65-.938 1.45-.362 2.8-.362 1.35 0 2.8.362 1.45.363 2.65.938.6.275.925.712.325.438.325 1.088v1.3Z"/>
    </Icon>
  );
});

IconMaterialRecordVoiceOverW100Filled.displayName = 'AmauiIconMaterialRecordVoiceOverW100Filled';

export default IconMaterialRecordVoiceOverW100Filled;
