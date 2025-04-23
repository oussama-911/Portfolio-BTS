function GLPIPres() {
    return (
      <div className="pt-16 h-screen bg-black flex items-center justify-center">
        <video
          className="w-full h-full object-cover"
          controls
        >
          <source src="/video/GLPIdoc.mp4" type="video/mp4" />
          Ton navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>
    );
  }
  
  export default GLPIPres;
  