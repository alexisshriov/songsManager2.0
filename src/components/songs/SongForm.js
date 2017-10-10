import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const SongForm = ({ song, allArtists, onSave, onChange, saving, errors }) => {
  return (
    <form>
      <h1>Manage Song</h1>
      <TextInput
        name="Title"
        label="Title"
        value={song.Title}
        onChange={onChange}
        error={errors.Title} />

      <SelectInput
        name="ArtistId"
        label="Artist"
        value={song.ArtistId}
        defaultOption="Select Artist"
        options={allArtists}
        onChange={onChange}
        error={errors.artistId} />

      <TextInput
        name="Year"
        label="Year"
        value={song.Year}
        onChange={onChange}
        error={errors.year} />

      <TextInput
        name="Genre"
        label="Genre"
        value={song.Genre}
        onChange={onChange}
        error={errors.Genre} />

      <TextInput
        name="Length"
        label="Length"
        value={song.Length}
        onChange={onChange}
        error={errors.Length} />

      <input
        type="submit"
        disabled={saving}
        value="Save"
        className="btn btn-primary"
        onClick={onSave} />
    </form>
  );
};

SongForm.propTypes = {
  song: React.PropTypes.object.isRequired,
  allArtists: React.PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default SongForm;
