import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteStackAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStackAdd'

      short_name='NoteStackAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160v-441q0-33 24-56t57-23h439q33 0 56.5 23.5T880-600v287q0 16-6 30.5T857-257L703-103q-11 11-25.5 17T647-80H360q-33 0-56.5-23.5T280-160ZM81-710q-6-33 13-59.5t52-32.5l434-77q33-6 59.5 13t32.5 52l10 54h-82l-7-40-433 77 40 226v279q-16-9-27.5-24T158-276L81-710Zm279 110v440h280l160-160v-280H360Zm220 220Zm-40 40v80q0 17 11.5 28.5T580-220q17 0 28.5-11.5T620-260v-80h80q17 0 28.5-11.5T740-380q0-17-11.5-28.5T700-420h-80v-80q0-17-11.5-28.5T580-540q-17 0-28.5 11.5T540-500v80h-80q-17 0-28.5 11.5T420-380q0 17 11.5 28.5T460-340h80Z"/>
    </Icon>
  );
});

IconMaterialNoteStackAdd.displayName = 'AmauiIconMaterialNoteStackAdd';

export default IconMaterialNoteStackAdd;
