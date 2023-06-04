import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutpatientMedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutpatientMedW100Filled'

      short_name='OutpatientMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.475 5.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8.7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM7.825 17q.425 0 .713-.288.287-.287.287-.712v-1.5h1.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287h-1.5V11q0-.425-.287-.713Q8.25 10 7.825 10t-.712.287q-.288.288-.288.713v1.5h-1.5q-.425 0-.712.287-.288.288-.288.713t.288.712q.287.288.712.288h1.5V16q0 .425.288.712.287.288.712.288Zm-4.2 2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V8.8q0-.65.425-1.075.425-.425 1.075-.425h8.4q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425Zm15.4-5.35q-.125-.125-.125-.263 0-.137.125-.262l1.525-1.475H16.8q-.125 0-.225-.112-.1-.113-.1-.238 0-.125.1-.225t.225-.1h3.75L19.075 10.2q-.125-.125-.137-.25-.013-.125.112-.25t.262-.125q.138 0 .263.125l1.8 1.775q.225.225.225.525 0 .3-.225.525L19.55 14.35q-.125.125-.262.125-.138 0-.263-.125Z"/>
    </Icon>
  );
});

IconMaterialOutpatientMedW100Filled.displayName = 'AmauiIconMaterialOutpatientMedW100Filled';

export default IconMaterialOutpatientMedW100Filled;
